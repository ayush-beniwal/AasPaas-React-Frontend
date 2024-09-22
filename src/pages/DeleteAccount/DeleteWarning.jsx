import styles from "./DeleteWarning.module.css";

function DeleteWarning() {
  return (
    <div className={styles.leave_message}>
      <h1>We are sad you are leaving us</h1>
      <h3>
        If you are facing any problem feel free to
        <a href="/users/contact">Contact Us</a>
      </h3>
      <h2>These things will happen after you delete your account</h2>
      <div className={styles.black_box}>
        <ul>
          <li>Your Account Details will be deleted from our system</li>
          <li>All of your listed products will be removed from the store</li>
          <li>
            All of your locked products will be unlocked for other users to view
          </li>
        </ul>
        <Br />
        None of the above mentioned details can be retrevived once the account
        is deleted
      </div>

      <div className={styles.recreate}>
        <h3>*You can recreate your account anytime you want in future</h3>
      </div>

      <button
        onclick="javascript:window.history.back();"
        className={styles.back_btn}
      >
        ← Go back
      </button>
      <form
        action="/users/delete"
        method="POST"
        className={styles.registration}
      >
        <button className={styles.continue}>Continue →</button>
      </form>
    </div>
  );
}

export default DeleteWarning;
