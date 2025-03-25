import "./styles/SharedStyles.css";

interface QuestionAnswerProps {
    question: string;
    answer: string;
}

function QuestionAnswer({ question, answer }: QuestionAnswerProps) {
    return (
        <>
            <p className="content-text-header">{question}</p>
            <p className="content-text">{answer}</p>
        </>
    )
}
export default QuestionAnswer;