import styles from "./DeleteConfirm.module.css";

function DeleteConfirm() {
  return (
    <div className={styles.confirmation_message}>
      <h1>Are you sure about deleting your account ??</h1>
      <div className={styles.btn_group_vertical}>
        <button
          onclick="javascript:window.history.back();"
          type="button"
          // className={styles.btn btn_primary}
        >
          ← Go back
        </button>
        <br />
        <form
          action="/users/deleteFinal"
          method="POST"
          className={styles.registration}
        >
          <button
            type="submit"
            //  className={styles.btn btn-danger btn-primary}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
              <path
                fill-rule="evenodd"
                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
              />
            </svg>
            Delete Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default DeleteConfirm;
