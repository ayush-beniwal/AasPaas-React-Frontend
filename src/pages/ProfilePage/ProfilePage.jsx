import styles from "./ProfilePage.module.css";

function ProfilePage() {
  return (
    <div id="youraccount">
      <div className={styles.box}>
        <div className={styles.heading}>Your account</div>
        <div className={styles.sections}>
          <a href="/users/logout" className={styles.cards}>
            <div className={styles.all_card}>
              <img
                src="https://res.cloudinary.com/sairev/image/upload/v1665898376/SecondSwap/Files/logout_macfk7_l7xo7b.png"
                id="logoutimg"
              />

              <ul id="desc-logout">
                <li className={styles.desc_title}>Logout</li>
                <br />
                <li id="logout">Click here to Logout</li>
              </ul>
            </div>
          </a>
          <a href="" className={styles.cards}>
            <div className={styles.all_card}>
              <img
                src="https://res.cloudinary.com/sairev/image/upload/v1665898416/SecondSwap/Files/Profile%20Images/locked_products_s4ffly_qquwfz.png"
                className={styles.lockedimg}
              />

              <ul id="desc-locked">
                <li className={styles.desc_title}>Locked Products</li>
                <br />
                <li id="locked">
                  View currently locked <br />
                  products you will buy
                </li>
              </ul>
            </div>
          </a>
          <a href="/users/contact" className={styles.cards}>
            <div className={styles.all_card}>
              <img
                src="https://res.cloudinary.com/sairev/image/upload/v1665898416/SecondSwap/Files/Profile%20Images/contact_us_fpi3py_dpw3ty.png"
                className={styles.contactimg}
              />
              <ul id="desc-contact">
                <li className={styles.desc_title}>Contact Us</li>
                <br />
                <li id="contact">
                  Contact us for feedback, <br />
                  queries, or reports
                </li>
              </ul>
            </div>
          </a>
          <a href="/users/edit" className={styles.cards}>
            <div className={styles.all_card}>
              <img
                src="https://res.cloudinary.com/sairev/image/upload/v1665898416/SecondSwap/Files/Profile%20Images/edit_info_d4n9ze_idrhea.png"
                id="editimg"
              />
              <ul id="desc-edit">
                <li className={styles.desc_title}>Edit Info</li>
                <br />
                <li id="info">Change account info</li>
              </ul>
            </div>
          </a>
          <a href="/users/wishlist" className={styles.cards}>
            <div className={styles.all_card}>
              <img
                src="https://res.cloudinary.com/aaspaas/image/upload/v1667571734/ProfilePage/wishlist_arfupx.png"
                className={styles.sellimg}
              />
              <ul id="desc-sell">
                <li className={styles.desc_title}>Wishlist</li>
                <br />
                <li id="sold">View products in your Wishlist</li>
              </ul>
            </div>
          </a>
          <a href="/users/delete" className={styles.cards}>
            <div className={styles.all_card}>
              <img
                src="https://res.cloudinary.com/sairev/image/upload/v1665898416/SecondSwap/Files/Profile%20Images/delete_account_jw0edu_mm63ua.png"
                id="deleteimg"
              />
              <ul id="desc-delete">
                <li className={styles.desc_title}>Delete Account</li>
                <br />
                <li id="delete">Delete your account and all info</li>
              </ul>
            </div>
          </a>
        </div>

        <hr />
        <div className={styles.info}>Account Information</div>
        <div className={styles.information}>
          <div className={styles.infobox}>
            {/* <div>Name: <%=currentUser.name%>
                </div>
                <div>Email: <%=currentUser.email%>
                </div>
                <div>Branch: <%=currentUser.branch%>
                </div>
                <div>
                  Hostel Info: Room number <%=currentUser.room%>
                    <%=currentUser.hostel%>
                </div>
                <div>Phone no: <%=currentUser.contact%>
                </div>
                */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
