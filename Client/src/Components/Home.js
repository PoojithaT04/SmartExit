import React from 'react';
//import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import studt from "../assets/student.jpeg";
import faclt from "../assets/faculty.jpg";
import secut from "../assets/security.jpg";

const Home = () => {

  const navigate = useNavigate();

  const styles = {
    header: {
      color: '#375528', 
      textAlign:'centre',
      justifyContent: 'center',
      alignItems: 'center'
    },
    logo: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'space-around',
    },
    buttonText: {
      textAlign: 'center',
      color: '#971b1e', // Set text color to dark red
    },
    button: {
      padding: '5px',
      backgroundColor: 'rgb(160,107,20)',
      color: '#fff', // Text color set to white
      cursor: 'pointer',
      border: 'none',
      borderRadius: '5px',
      fontSize: '16px', // Increased font size
    },
  };


  const handleStudentClick = () => {
    navigate('/StudentLogin');
  };

  const handleFacultyClick = () => {
    navigate('/FacultyLogin');
  };

  const handleSecurityClick = () => {
    navigate('/SecurityLogin');
  };

  return (


    <div>
      <br />
      
      <div style={styles.logo}>
        <img
          src="CBIT-LOGO-2023.png"  
          alt="Your App"
          style={{ width: '50%', maxWidth: '50%', height: 'auto' }}
        />
      </div>
      <br/><br/>
      <div className="container" style={styles.buttonContainer}>
        <div className="button_text" style={styles.buttonText}>
          <button style={{...styles.button,backgroundColor: 'rgb(160,107,20)'}} onClick={handleStudentClick}>
            <img className="imge" src={studt} alt="Student Login" style={{ width: '128px', height: '128px' }} />
            <div className="button_label">Student</div>
          </button>
        </div>
        <div className="button_text" style={styles.buttonText}>
          <button style={{...styles.button,backgroundColor:'rgb(160,107,20)'}} onClick={handleFacultyClick}>
            <img className="imge" src={faclt} alt="Faculty Login" style={{ width: '128px', height: '128px' }} />
            <div className="button_label">Faculty</div>
          </button>
        </div>
        <div className="button_text" style={styles.buttonText}>
          <button style={styles.button} onClick={handleSecurityClick}>
            <img className="imge" src={secut} alt="Security Login" style={{ width: '128px', height: '128px' }} />
            <div className="button_label">Security</div>
          </button>
        </div>
      </div>
    </div>


  );
};

export default Home;
