import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

const About = () => {
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const [feed, setFeed] = useState([]);

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const messageHandler = (e) => {
    setMessage(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const data = {
      emailId: email,
      msg: message,
    };
    setFeed(data);

    setEmail('');
    setMessage('');
  };

  const setFeedBack = useCallback((feedback) => {
    return async () => {
      const sendRequest = async () => {
        const response = await fetch(
          `https://react-shopping-app-cd61a-default-rtdb.firebaseio.com/feedback.json`,
          {
            method: 'POST',
            body: JSON.stringify(feedback),
          }
        );
        if (!response.ok) {
          throw new Error('Feedback failed');
        }
      };
      try {
        await sendRequest();
      } catch (e) {
        console.log(e.message);
      }
    };
  }, []);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setFeedBack(feed));
  }, [dispatch, feed, setFeedBack]);

  return (
    <div className="section about-contianer">
      <h1>About us</h1>
      <p>
        The European languages are members of the same family. Their separate
        existence is a myth. For science, music, sport, etc, Europe uses the
        same vocabulary. The languages only differ in their grammar, their
        pronunciation and their most common words. Everyone realizes why a new
        common language would be desirable: one could refuse to pay expensive
        translators. To achieve this, it would be necessary to have uniform
        grammar, pronunciation and more common words. If several languages
        coalesce, the grammar of the resulting language is more simple and
        regular than that of the individual languages. The new common language
        will be more simple and regular than the existing European languages. It
        will be as simple as Occidental; in fact, it will be Occidental. To an
        English person, it will seem like simplified English, as a skeptical
        Cambridge friend of mine told me what Occidental is.The European
        languages are members of the same family. Their separate existence is a
        myth. For science, music, sport, etc, Europe uses the same vocabulary.
        The languages only differ in their grammar, their pronunciation and
        their most common words. Everyone realizes why a new common language
        would be desirable: one could refuse to pay expensive translators. To
      </p>

      <div>
        <h2>Our Contact</h2>
        <p>Phone no : +(999) 999999</p>
        <p>Email Id : snatchdeal22@gmail.com</p>
        <p>Address : St West Easter Park, California , USA</p>
      </div>

      <form onSubmit={submitHandler}>
        <div className="feedback">
          <h2>Write a Feedback</h2>
          <input
            type="email"
            value={email}
            placeholder="email"
            onChange={emailHandler}
          />
          <textarea
            rows="10"
            cols="10"
            placeholder="Message"
            value={message}
            onChange={messageHandler}
          ></textarea>
          <button className="submit">Done</button>
        </div>
      </form>
    </div>
  );
};

export default About;
