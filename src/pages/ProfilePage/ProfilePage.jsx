import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutSuccess } from '../../store/slices/usersSlice'; // Adjust the path to your user slice
import styles from './ProfilePage.module.css';
import Navbar from '../../Components/Navbar/Navbar';
import FooterL from '../../Components/FooterL/FooterL';


function ProfilePage() {
  const user = useSelector((state) => state.user); // Get user information from Redux
  const dispatch = useDispatch(); // Initialize dispatch for logout
  const navigate = useNavigate(); // To navigate after logout

  const handleLogout = () => {
    dispatch(logoutSuccess()); // Dispatch the logout action to reset user state
    navigate('/'); // Redirect to home page after logout
  };

  return (
    <div>
    <Navbar/>
    <div id="youraccount">
      <div className={styles.box}>
        <div className={styles.heading}>Your Account</div>
        
        <div className={styles.info}>Account Information</div>
        <div className={styles.information}>
          <div className={styles.infobox}>
            <div>Name: {user.name.trim() || 'N/A'}</div>
            <div>Email: {user.email.trim() || 'N/A'}</div>
            <div>Branch: {user.branch || 'N/A'}</div>
            <div>
              Hostel Info: Room number {user.room || 'N/A'} {user.hostel || ''}
            </div>
            <div>Phone no: {user.contact || 'N/A'}</div>
          </div>
        </div>

        <hr />
        
        <button className={styles.logoutButton} onClick={handleLogout}>
          Logout
        </button>
        
       

        <a href="/users/delete" className={styles.card}>
          <div className={styles.cardContent}>
            <span>Delete Account</span>
          </div>
        </a>

        <a href="/faq" className={styles.card}>
          <div className={styles.cardContent}>
            <span>Frequently Asked Questions</span>
          </div>
        </a>
      </div>
    </div>
    <FooterL/>
    </div>
  );
}

export default ProfilePage;
