class UserController {
    getAllUsers(req, res) {
        res.json(users);
    }

    getUserById(req, res){
        const userId = parseTnt(req.params.id);
        const user = this.userModel.getUserById(userId);
        if(!user) return res.status(404).json({ message: 'User not found' });
        res.json(user)
    }

    createUser(req, res) {
        const { name, email } = req.body;
        if (!name || !email){
            return res.status(400).json({ message: 'Name and email are required' });
        }
        const newUser = this.userModel.createUser( name, email );
        res.status(201).json(newUser);
    }

    updateUser(req, res) {
        const userId = parseInt(req.params.id);
        const { name, email } = req.body;
        const updatedUser = this.userModel.updateUser(userId, name, email);
        if (!updatedUser) return res.status(404).json({ message: 'User not found' });
        res.json(updatedUser);
    }

    deleteUser(req, res) {
        const userId = parseInt(req.params.id);
        const deletedUser = this.userModel.deleteUser(userId);
        if (!deletedUser) return res.status(404).json({ message: 'User not found' });
        res.json({ message: 'User deleted successfully' });
    }
}
export default UserController;