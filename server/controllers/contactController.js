
import Contact from "../models/contactModel.js";

// Submit contact message
export const createContact = async (req, res) => {
  try {
    const { username, email, subject, message } = req.body;

    // Validate input
    if (!username || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Save message in MongoDB
    const contact = await Contact.create({
      username,
      email,
      subject,
      message,

      // Logged-in user's ID, otherwise null
      user: req.user ? req.user._id : null,
    });

    res.status(201).json({
      success: true,
      message: "Your message has been submitted successfully",
      contact,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// Get logged-in user's contact history
export const getContactHistory = async (req, res) => {
  try {
    const contacts = await Contact.find({
      user: req.user._id,
    }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      contacts,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
