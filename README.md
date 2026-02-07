Key Decisions and Assumptions

   Tech Stack: React.js (with Vite for fast development), Node.js (with Express), MongoDB (via Mongoose for ODM).
    Features:
        1.   Income Calculator: Users can add incomes (e.g., salary, extra income) and view the total.
        2.   Investment Tracker: Track platforms (e.g., stocks, crypto) and investments in them.
        3.   Transaction Tracker: Log daily money in/out with details (e.g., amount, description, date).
        4.   Savings Predictor: Input current savings, interest rate, and time period to predict future value using compound interest formula.
        5.   Needs and Wants: User can add and view lists of needs and wants.
    Sample Data: Included in the backend setup (seeded into MongoDB on server start).
    Security/Notes: This is a basic implementation. In production, add authentication (e.g., JWT), input validation, and error handling. CORS is enabled for frontend-backend communication.
