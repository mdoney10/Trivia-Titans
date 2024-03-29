from fastapi.testclient import TestClient
from fastapi import APIRouter
from main import app
from queries.questions import QuestionRepository, QuestionModelOut

router = APIRouter()
client = TestClient(app)


class FakeQuestionRepo:
    def get_one_question(self, question_id):
        if question_id >= 10000:
            return None
        return QuestionModelOut(
            id=question_id,
            category="string",
            type="string",
            difficulty="string",
            question="string",
            correct_answer="string",
            incorrect_answer_1="string",
            incorrect_answer_2="string",
            incorrect_answer_3="string",
        )


def test_get_question():
    # Arrange
    app.dependency_overrides[QuestionRepository] = FakeQuestionRepo

    # Act
    response = client.get("/api/questions/1")

    # Clean up
    app.dependency_overrides = {}

    # Assert
    assert response.status_code == 200
    assert response.json() == QuestionModelOut(
        id=1,
        category="string",
        type="string",
        difficulty="string",
        question="string",
        correct_answer="string",
        incorrect_answer_1="string",
        incorrect_answer_2="string",
        incorrect_answer_3="string",
    )
