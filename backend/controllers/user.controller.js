import User from "../models/user.model.js";

export const get_current_user = async (req, res) => {
    try {
        const id = req.userId
        const user = await User.findById(id).select("-password")
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        return res.status(200).json(user)
    } catch (error) {
        return res.status(500).json({ message: 'Error fetching user', error: error.message });
    }
}