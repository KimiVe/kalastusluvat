import { useSelector} from "react-redux";
import { AppState } from "../store";
import "./styles/SharedStyles.css";
import QuestionAnswer from "./QuestionAnswer";

const Questionspage = () => {
    const { content } = useSelector((state: AppState) => state.selectedLanguage);

    return (
        <>
            <div className="content-box">
                <QuestionAnswer
                    question={content.commonQuestions.question0}
                    answer={content.commonQuestions.answer0}>
                </QuestionAnswer>
                <QuestionAnswer
                    question={content.commonQuestions.question1}
                    answer={content.commonQuestions.answer1}>
                </QuestionAnswer>
                <QuestionAnswer
                    question={content.commonQuestions.question2}
                    answer={content.commonQuestions.answer2}>
                </QuestionAnswer>
                <QuestionAnswer
                    question={content.commonQuestions.question3}
                    answer={content.commonQuestions.answer3}>
                </QuestionAnswer>
                <QuestionAnswer
                    question={content.commonQuestions.question4}
                    answer={content.commonQuestions.answer4}>
                </QuestionAnswer>
                <QuestionAnswer
                    question={content.commonQuestions.question5}
                    answer={content.commonQuestions.answer5}>
                </QuestionAnswer>
                <QuestionAnswer
                    question={content.commonQuestions.question5}
                    answer={content.commonQuestions.answer5}>
                </QuestionAnswer>
            </div>
        </>
    )
}

export default Questionspage