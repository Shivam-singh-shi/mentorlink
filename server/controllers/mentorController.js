import Mentor from "../models/Mentor.js";

// ===============================
// Add Mentor
// ===============================
export const addMentor = async (req, res) => {
  try {
    const {
      name,
      profession,
      experience,
      skills,
      bio,
      profileImage,
      hourlyRate,
    } = req.body;

    const mentor = await Mentor.create({
      name,
      profession,
      experience,
      skills,
      bio,
      profileImage,
      hourlyRate,
    });

    res.status(201).json({
      success: true,
      message: "Mentor Added Successfully",
      mentor,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ===============================
// Get All Mentors
// ===============================
export const getAllMentors = async (req, res) => {
  try {
    const mentors = await Mentor.find();

    res.status(200).json({
      success: true,
      mentors,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ===============================
// Get Mentor By ID
// ===============================
export const getMentorById = async (req, res) => {
  try {
    const mentor = await Mentor.findById(req.params.id);

    if (!mentor) {
      return res.status(404).json({
        success: false,
        message: "Mentor not found",
      });
    }

    res.status(200).json({
      success: true,
      mentor,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ===============================
// Update Mentor
// ===============================
export const updateMentor = async (req, res) => {
  try {
    const mentor = await Mentor.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!mentor) {
      return res.status(404).json({
        success: false,
        message: "Mentor not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Mentor Updated Successfully",
      mentor,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ===============================
// Delete Mentor
// ===============================
export const deleteMentor = async (req, res) => {
  try {
    const mentor = await Mentor.findById(req.params.id);

    if (!mentor) {
      return res.status(404).json({
        success: false,
        message: "Mentor not found",
      });
    }

    await mentor.deleteOne();

    res.status(200).json({
      success: true,
      message: "Mentor Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
