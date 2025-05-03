import "./Blogs.css";

const Blogs = () => {
  return (
    <>
      <section id="blogs_container">
        <div className="main_blog_container">
          <div className="blog_card">
            <h1>1. What is useState and how does it work in React?</h1>
            <p>
              {" "}
              <b>
                <u>Ans</u>
              </b>
              : useState is a React hook that allows functional components to
              have their own state. It helps React remember a value between
              component re-renders and provides a way to update that value. When
              the state changes using the update function, React automatically
              re-renders the component to reflect the new state.
            </p>
          </div>

          <div className="blog_card">
            <h1>2. What is the purpose of useEffect in React?</h1>
            <p>
              {" "}
              <b>
                <u>Ans</u>
              </b>
              : The useEffect hook is used to run side effects in React
              components. Side effects can include tasks like fetching data,
              updating the DOM directly, setting up subscriptions, or starting
              timers. It runs after the component renders and can also clean up
              when the component unmounts or before running again.
            </p>
          </div>

          <div className="blog_card">
            <h1>
              3. What is a custom hook in React and when should you use one?
            </h1>
            <p>
              {" "}
              <b>
                <u>Ans</u>
              </b>
              : A custom hook is a JavaScript function that uses one or more
              built-in React hooks to share reusable logic between components.
              You should use a custom hook when you want to extract and reuse
              stateful logic (like fetching data, handling forms, or managing
              timers) across multiple components, keeping your code clean and
              organized.
            </p>
          </div>

          <div className="blog_card">
            <h1>
              4. Difference between controlled and uncontrolled components?
              Which one is better?
            </h1>
            <p>
              {" "}
              <b>
                <u>Ans</u>
              </b>
              : Controlled components are React components where form data is
              handled by the React state. The input value is controlled using
              useState or other state management tools.<br></br>
              Uncontrolled components store form data in the DOM itself using
              refs, and React doesn’t directly manage the input value.
            </p>
          </div>

          <div className="blog_card">
            <h1>
              5. Tell us something about useFormStatus() (explore and explain)
            </h1>
            <p>
              {" "}
              <b>
                <u>Ans</u>
              </b>
              : useFormStatus() is a React hook provided by React Server
              Components and the new form actions API, mainly used in React 18+
              with frameworks like Next.js. It helps you track the current
              status of a form submission, such as whether the form is
              submitting, succeeded, or failed.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
