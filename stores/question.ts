import firebase, { firestore } from '../utils/firebase';
import BaseStore from "./base";
import { Question, Status } from "../types";

export interface QuestionStoreProps {
  loading: boolean;
  questions: Question[];
  approved: Question[];
}

class QuestionStore extends BaseStore<QuestionStoreProps> {
  protected store: string = 'question-store';

  constructor() {
    super({
      loading: true,
      questions: [],
      approved: [],
    })
  }

  create(question: Partial<Question>) {
    return firestore.collection('questions').add({
      ...question,
      createdDate: firebase.firestore.Timestamp.now(),
    }).then(() => {
      // console.log('animal added', animal);
    });
  }

  deleteQuestion(id: string) {
    return firestore.doc(`questions/${id}`).delete();
  }

  getQuestions() {
    this.patch({
      loading: true
    });

    firestore.collection('questions').orderBy('createdDate', 'desc').onSnapshot((snapshot) => {
      if (snapshot.size) {
        const questions: Question[] = [];
        snapshot.forEach((doc) => {
          questions.push({ id: doc.id, ...doc.data() as Question })
        });
        this.patch({
          loading: false,
          questions: questions,
          approved: questions.filter((question: Question) => question.status === Status.Approved),
        });
      } else {
        this.patch({
          loading: false
        });
      }
    })
  }
}

export default new QuestionStore();
