import {Button} from "@/components/ui/button.tsx";
import {ArrowRight} from "lucide-react";
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-blue-100 flex flex-col">

            <header className="text-center py-20 px-4 max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                    Ace Your Next Interview with AI-Powered Mock Interviews
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-8">
                    Get real-time feedback, tailored questions, and expert insights to boost your confidence and skills.
                </p>
                <Link to="/signin">
                    <Button className="text-lg px-6 py-3">Sign In for Free Mock Interview</Button>
                </Link>
            </header>


            <section className="py-16 px-4 max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
                <div className="bg-white shadow-xl rounded-2xl p-6 text-center">
                    <h3 className="text-xl font-semibold mb-2">Realistic Questions</h3>
                    <p className="text-gray-600 text-sm">
                        AI generates job-specific questions based on your profile and role.
                    </p>
                </div>
                <div className="bg-white shadow-xl rounded-2xl p-6 text-center">
                    <h3 className="text-xl font-semibold mb-2">Instant Feedback</h3>
                    <p className="text-gray-600 text-sm">
                        Get insights on tone, clarity, and confidence right after your answer.
                    </p>
                </div>
                <div className="bg-white shadow-xl rounded-2xl p-6 text-center">
                    <h3 className="text-xl font-semibold mb-2">Track Progress</h3>
                    <p className="text-gray-600 text-sm">
                        Monitor your growth with performance metrics and personalized tips.
                    </p>
                </div>
            </section>


            <section className="bg-blue-600 text-white py-16 text-center px-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Ready to Level Up Your Interview Skills?
                </h2>
                <p className="text-lg md:text-xl mb-6">
                    Practice anytime, anywhere. Get started in minutes.
                </p>
                <Button className="bg-white text-blue-600 font-semibold hover:bg-gray-100">
                    Get Started <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
            </section>

        </div>
    );
};

export default Home;
