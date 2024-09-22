import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess, logoutSuccess } from "../../store";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";

function RegistrationForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [branch, setBranch] = useState("");
  const [year, setYear] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [hostel, setHostel] = useState("");
  const [room, setRoom] = useState("");
  const [register, registerResults] = useRegisterMutation();
  const [cookies, setCookie] = useCookies(["user"]);

  const user = useSelector((state) => {
    return state.user;
  });

  // console.log(user);

  useEffect(() => {
    if (!user.isLoggedIn) {
      navigate("/login");
    }
    if (
      user.isLoggedIn &&
      registerResults.data &&
      registerResults.data.status === 200
    ) {
      navigate("/");
      toast.success("Welcome");
    }

    if (
      user.isLoggedIn &&
      registerResults.data &&
      registerResults.data.status === 400
    ) {
      navigate("/login");
      toast.warn(registerResults.data.message);
    }
  }, [navigate, registerResults.data, user.isLoggedIn]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    let finalData = {
      name: user.name,
      email: user.email,
      branch,
      year,
      contactNumber,
      hostel,
      room,
      photo: user.photo,
      token: user.token,
    };
    try {
      const { data } = await register(finalData);

      dispatch(
        loginSuccess({
          id: data.id,
        })
      );
      setCookie(
        "user",
        {
          id: data.id,
        },
        { path: "/" }
      );
    } catch (error) {
      console.error(error);
    }
  };

  console.log(user);

  return (
    <div className="registration-form">
      <form onSubmit={handleSubmit}>
        <h2>Registration Form</h2>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={user.name} readOnly />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            readOnly
          />
        </div>
        <div className="form-group">
          <label htmlFor="branch">Branch:</label>
          <select
            defaultValue={""}
            id="branch"
            name="branch"
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
            onInvalid={(e) =>
              e.target.setCustomValidity("Please select your Branch")
            }
            onInput={(e) => e.target.setCustomValidity("")}
            required
          >
            <option value="" disabled hidden>
              Select Your Branch
            </option>
            <option value="Biochemical Engineering">
              Biochemical Engineering
            </option>
            <option value="Biomedical Engineering">
              Biomedical Engineering
            </option>
            <option value="Ceramic Engineering">Ceramic Engineering</option>
            <option value="Chemical Engineering">Chemical Engineering</option>
            <option value="Civil Engineering">Civil Engineering</option>
            <option value="Computer Science and Engineering">
              Computer Science and Engineering
            </option>
            <option value="Electrical Engineering">
              Electrical Engineering
            </option>
            <option value="Electronics Engineering">
              Electronics Engineering
            </option>
            <option value="Engineering Physics">Engineering Physics</option>
            <option value="Materials Science and Technology">
              Materials Science and Technology
            </option>
            <option value="Mathematics and Computing">
              Mathematics and Computing
            </option>
            <option value="Mechanical Engineering">
              Mechanical Engineering
            </option>
            <option value="Metallurgical Engineering">
              Metallurgical Engineering
            </option>
            <option value="Mining Engineering">Mining Engineering</option>
            <option value="Pharmaceutical Engineering">
              Pharmaceutical Engineering
            </option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="year">Year:</label>
          <select
            defaultValue={""}
            id="year"
            name="year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            onInvalid={(e) => e.target.setCustomValidity("Please select Year")}
            onInput={(e) => e.target.setCustomValidity("")}
            required
          >
            <option value="" disabled hidden>
              Select Your Year
            </option>
            <option value="1">1st Year</option>
            <option value="2">2nd Year</option>
            <option value="3">3rd Year</option>
            <option value="4">4th Year</option>
            <option value="5">5th Year</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="contact">Contact Number:</label>
          <input
            type="tel"
            id="contact"
            name="contact"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            pattern="^[0-9]{10,}$"
            onInvalid={(e) =>
              e.target.setCustomValidity("Please enter a 10-digit number")
            }
            onInput={(e) => e.target.setCustomValidity("")}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="hostel">Hostel:</label>
          <select
            defaultValue={""}
            id="hostel"
            name="hostel"
            value={hostel}
            onChange={(e) => setHostel(e.target.value)}
            onInvalid={(e) =>
              e.target.setCustomValidity("Please select your Hostel")
            }
            onInput={(e) => e.target.setCustomValidity("")}
            required
          >
            <option value="" disabled hidden>
              Select Your Hostel
            </option>
            <option value="Dr. CV Raman">Dr. CV Raman</option>
            <option value="Morvi">Morvi</option>
            <option value="Dhanrajgiri Hostel - 1">
              Dhanrajgiri Hostel - 1
            </option>
            <option value="Dhanrajgiri Hostel - 2">
              Dhanrajgiri Hostel - 2
            </option>
            <option value="Visvesvaraya">Visvesvaraya</option>
            <option value="Rajputana">Rajputana</option>
            <option value="S.N.Bose">S.N.Bose</option>
            <option value="Limbdi">Limbdi</option>
            <option value="Vishwakarma">Vishwakarma</option>
            <option value="Vivekanand">Vivekanand</option>
            <option value="Aryabhatta Hostel - 1 & 2">
              Aryabhatta Hostel - 1 & 2
            </option>
            <option value="Ramanujan">Ramanujan</option>
            <option value="Ghandi Smriti Chhatravas">
              Ghandi Smriti Chhatravas
            </option>
            <option value="IIT (BHU) Girls Hostel - 1 & 2">
              IIT (BHU) Girls Hostel - 1 & 2
            </option>
            <option value="Saluja">Saluja</option>
            <option value="S.C.Dey">S.C.Dey</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="room">Room Number:</label>
          <input
            type="text"
            id="room"
            name="room"
            value={room}
            onChange={(e) => setRoom(e.target.value)}
            onInvalid={(e) =>
              e.target.setCustomValidity("Please enter your Room Number")
            }
            onInput={(e) => e.target.setCustomValidity("")}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="photo">Profile Photo:</label>
          <br />
          <img
            src={user.photo}
            alt="Profile"
            style={{ width: "150px", height: "150px" }}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
