import api from "../services/api";

export const loadRazorpaySDK = () => {
  return new Promise((resolve) => {
    if (window.Razorpay) {
      resolve(true);
      return;
    }
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

export const handlePlanPayment = async (plan, setLoading) => {
  if (!plan) return;
  if (setLoading) setLoading(true);

  try {
    if (plan.amount === 0) {
      alert("🎉 Free Trial Selected! Our mentor will contact you shortly to get you started.");
      if (setLoading) setLoading(false);
      return;
    }

    const isLoaded = await loadRazorpaySDK();
    if (!isLoaded) {
      alert("Failed to load Razorpay SDK. Please check your internet connection.");
      if (setLoading) setLoading(false);
      return;
    }

    // Get logged in user details if available
    let storedUser = null;
    try {
      const u = localStorage.getItem("user");
      if (u) storedUser = JSON.parse(u);
    } catch (e) {
      console.warn("Could not parse user from localStorage", e);
    }

    // 1. Create order on backend
    const { data } = await api.post("/payment/create-order", {
      amount: plan.amount,
    });

    if (!data || !data.success || !data.order) {
      alert("Failed to create payment order. Please try again.");
      if (setLoading) setLoading(false);
      return;
    }

    const razorpayKey = import.meta.env.VITE_RAZORPAY_KEY_ID;

    if (!razorpayKey) {
      alert("❌ Razorpay Key ID is missing! Please set VITE_RAZORPAY_KEY_ID in Vercel Environment Variables and redeploy.");
      if (setLoading) setLoading(false);
      return;
    }

    // 2. Open Razorpay modal with clean standard options
    const options = {
      key: razorpayKey,
      amount: data.order.amount,
      currency: data.order.currency || "INR",
      name: "MentorLink",
      description: `${plan.title} Mentorship Plan`,
      order_id: data.order.id,

      handler: async function (response) {
        try {
          const verifyRes = await api.post("/payment/verify", {
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
            userName: storedUser?.fullName || storedUser?.name || "Student",
            userEmail: storedUser?.email || "student@example.com",
            userPhone: storedUser?.phone || "—",
            planTitle: plan?.title || "Mentorship Plan",
            amount: plan?.amount || 0,
          });

          if (verifyRes.data && verifyRes.data.success) {
            alert(`✅ Payment Successful! Welcome to the ${plan.title} plan.`);
          } else {
            alert("❌ Payment verification failed.");
          }
        } catch (error) {
          console.error("Verification error:", error);
          alert("❌ Payment Verification Failed.");
        } finally {
          if (setLoading) setLoading(false);
        }
      },

      prefill: {
        name: storedUser?.name || "Student",
        email: storedUser?.email || "student@example.com",
        contact: storedUser?.phone || "9999999999",
      },
      modal: {
        confirm_close: true,
        ondismiss: function () {
          if (setLoading) setLoading(false);
        },
      },
      theme: {
        color: "#facc15",
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.on("payment.failed", function (response) {
      alert(`❌ Payment Failed: ${response.error?.description || "Transaction declined"}`);
      if (setLoading) setLoading(false);
    });
    razorpay.open();
  } catch (error) {
    console.error("Payment Error:", error);
    const errorMsg =
      error?.response?.data?.message ||
      error?.message ||
      "Payment process failed. Please check your network connection.";
    alert(`❌ ${errorMsg}`);
    if (setLoading) setLoading(false);
  }
};
