import React, { useState } from 'react';
import { Form, Field } from 'react-final-form'
import questionStore from '../../stores/question';
import { H2, SmallParagraph } from '../Typography';
import Button from '../Button';
import { Question, Status } from '../../types';
import { StyledQuestionForm } from './styles';
import { User } from 'firebase';

interface QuestionFormProps {
  user: User;
  onClose: () => void;
  onSubmit: () => void;
}

const initialValues = {
  question: '',
  answer: '',
  link: '',
  status: Status.Pending
};

interface FormError {
  [key: string]: string;
}

const validator = (values: Partial<Question>): FormError => {
  let errors: FormError = {};

  if (!values.question) {
    errors.question = 'A question is required'
  }

  if (!values.answer) {
    errors.answer = 'A answer is required'
  }

  if (!values.language) {
    errors.language = 'A language is required.'
  }

  return errors;
}

const QuestionForm: React.FC<QuestionFormProps> = ({ user, onClose, onSubmit }) => {

  const onFormSubmit = (values: Partial<Question>) => {
    questionStore.create({
      ...values,
      createdById: user.uid,
      createdBy: user.displayName || 'Anonymous'
    }).then(() => {
      onSubmit();
    })
  }

  return (
    <StyledQuestionForm>
      <div className="header">
        <H2 fontSize="32">Submit Question</H2>
        <Button variant="primary" onClick={() => onClose()}>
          Close
        </Button>
      </div>
      <Form
        onSubmit={onFormSubmit}
        initialValues={initialValues}
        validate={validator}
        render={({ handleSubmit, form, submitting }) => (
          <form className="form" onSubmit={handleSubmit}>
            <Field
              name="question"
              render={({ input, meta }) => (
                <div className="form-group">
                  <label>Question<sup>*</sup></label>
                  <textarea rows={5} placeholder="Usually something ridiculous that only 10x devs would know (duh)" {...input} />
                  {meta.touched && meta.error && <span className="form-error">{meta.error}</span>}
                </div>
              )}
            />
            <Field
              name="answer"
              render={({ input, meta }) => (
                <div className="form-group">
                  <label>
                    Answer<sup>*</sup><br/>
                    <SmallParagraph>Using <a href="http://bvaughn.github.io/react-highlight.js/" target="_blank" rel="noopener nofollow">highlight.js</a> to render out this code block. Use wisely.</SmallParagraph>
                  </label>
                  <textarea rows={5} placeholder="Provide your solution (code or it didnt happen)" {...input} />
                  {meta.touched && meta.error && <span className="form-error">{meta.error}</span>}
                </div>
              )}
            />
            <Field
              name="language"
              render={({ input, meta }) => (
                <div className="form-group">
                  <label>
                    Language<sup>*</sup><br/>
                    <SmallParagraph>For supported languages please visit <a href="https://highlightjs.org/static/demo/" target="_blank" rel="noopener nofollow">highlight.js</a></SmallParagraph>
                  </label>
                  <input type="text" placeholder="javascript" {...input} />
                  {meta.touched && meta.error && <span className="form-error">{meta.error}</span>}
                </div>
              )}
            />
            <Field
              name="company"
              render={({ input, meta }) => (
                <div className="form-group">
                  <label>
                    Company
                    <SmallParagraph>No, you don't have to fill this out</SmallParagraph>
                  </label>
                  <input type="text" placeholder="Google?" {...input} />
                  {meta.touched && meta.error && <span className="form-error">{meta.error}</span>}
                </div>
              )}
            />
            <Field
              name="link"
              render={({ input, meta }) => (
                <div className="form-group">
                  <label>
                    Link
                    <SmallParagraph>If you have code sample, even better.</SmallParagraph>
                  </label>
                  <input type="text" placeholder="https://codepen.io" {...input} />
                  {meta.touched && meta.error && <span className="form-error">{meta.error}</span>}
                </div>
              )}
            />
            <div className="form-group submit">
              <Button type="submit" variant="primary" disabled={submitting}>
                Submit
              </Button>
            </div>
          </form>
        )}>
      </Form>
    </StyledQuestionForm>
  );
};

export default QuestionForm;
