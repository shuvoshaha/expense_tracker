const model = require('../model/model')

const expenseController = {

    // Create expense by Client Form
    createExpense: async (req, res) => {
        try {
            const { name, entry } = req.body;

            // if (!name || !entry) return res.status(404).json({ message: "All  Field is required" });

            const newExpense = new model({
                name, entry
            })

            await newExpense.save()
            return res.status(201).json({ message: "Expense Created" });

        } catch (err) {
            res.status(500).json({ message: err.message })
        }
    },


    // View ALl expense for Client Side
    viewExpense: async (req, res) => {

        try {
            const allExpense = await model.find();
            return res.status(201).json({ allExpense });

        } catch (err) {
            res.status(500).json({ message: err.message })
        }


    },

    // Delete expense by ID
    deleteExpense: async (req, res) => {
        try {
            const { id } = req.params
            const isMatch = await model.findOne({ _id: id });

            if (!isMatch) return res.status(404).json({ message: "Expense is not match" });

            await model.findOneAndDelete({ _id: id })
            return res.status(201).json({ message: "Successfuly deleted" });

        } catch (err) {
            res.status(500).json({ message: err.message })
        }
    }
}

module.exports = expenseController;