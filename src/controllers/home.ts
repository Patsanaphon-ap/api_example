
export const getHomePage = async (req, res, next) => {
    try {
        return res.status(200).json({
            message: "success",
            code: 200,
        });
    } catch (e) {
      next(e);
    }
};