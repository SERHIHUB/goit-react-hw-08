import css from "./Home.module.css";

const Home = () => {
  return (
    <div className={css.container}>
      Hello, this application will allow you to create your own contact book,
      which only you will have access to, add new contacts and delete
      unnecessary ones. Pleasant use.
    </div>
  );
};

export default Home;
