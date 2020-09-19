import Button from "@material-ui/core/Button";
import axios from "axios";
import React from "react";

// import UserContext from "../../context/UserContext";

class ProfileDashboard extends React.Component {
  // state = {
  //   first_name: this.props.first_name,
  //   last_name: this.props.last_name,
  //   mumble_email: this.props.mumble_email,
  //   age: this.props.age,
  //   body_type: this.props.body_type,
  //   diet: this.props.diet,
  //   drinks: this.props.drinks,
  //   drugs: this.props.drugs,
  //   education: this.props.education,
  //   ethnicity: this.props.ethnicity,
  //   height: this.props.height,
  //   income: this.props.income,
  //   job: this.props.job,
  //   location: this.props.location,
  //   offspring: this.props.offspring,
  //   orientation: this.props.orientation,
  //   pets: this.props.pets,
  //   religion: this.props.religion,
  //   sex: this.props.sex,
  //   smokes: this.props.smokes,
  //   status: this.props.status,
  //   profile_image: this.props.profile_image,
  // };
  componentDidMount = () => {
    console.log(this.props);
  };
  handleChange = (event) => {
    event.preventDefault();
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  };

  saveProfile = () => {
    // console.log(this.state);
    const profileRec = {
      first_name: this.props.first_name,
      last_name: this.props.last_name,
      mumble_email: this.props.mumble_email,
      age: this.props.age,
      body_type: this.props.body_type,
      diet: this.props.diet,
      drinks: this.props.drinks,
      drugs: this.props.drugs,
      education: this.props.education,
      ethnicity: this.props.ethnicity,
      height: this.props.height,
      income: this.props.income,
      job: this.props.job,
      location: this.props.location,
      offspring: this.props.offspring,
      orientation: this.props.orientation,
      pets: this.props.pets,
      religion: this.props.religion,
      sex: this.props.sex,
      smokes: this.props.smokes,
      status: this.props.status,
      profile_image: this.props.profile_image,
    };
    console.log(profileRec);

    const token = localStorage.getItem("auth-token");
    axios({
      method: "POST",
      url: "/profile/new",
      headers: { "x-auth-token": token },
      data: profileRec,
    }).then((saveRec) => {
      console.log(saveRec);
    });
  };

  render() {
    return (
      <div className="proDashMargin">
        <h1>Profile</h1>
        <form className="centerForm">
          <img src={this.props.profile_image} alt="" />
          <span>Name</span>
          <br />
          <input
            name="firstName"
            onChange={this.handleChange}
            value={this.props.first_name}
            size="8"
            style={{ fontSize: "24px", fontWeight: "bold" }}
          />
          <input
            name="lastName"
            onChange={this.handleChange}
            value={this.props.lastName}
            size="8"
            style={{ fontSize: "24px", fontWeight: "bold" }}
          />
          <input
            name="age"
            onChange={this.handleChange}
            value={this.props.age}
            size="2"
            maxlength="2"
            style={{ fontSize: "24px", fontWeight: "bold" }}
          />
          <br />
          <span>Gender </span>
          <br />
          <input
            name="gender"
            onChange={this.handleChange}
            value={this.props.gender}
            size="8"
          />
          <br />
          <span>Number </span>
          <input
            name="phone"
            onChange={this.handleChange}
            value={this.props.phone}
            style={{ width: "auto" }}
          />
          <br />
          <span>Location </span>
          <input
            name="location"
            onChange={this.handleChange}
            value={this.props.location}
          />
          <br />
          <span>Orientation </span>
          <input
            name="orientation"
            onChange={this.handleChange}
            value={this.props.orientation}
          />
          <br />
          <span>Ethnicity </span>
          <input
            name="ethnicity"
            onChange={this.handleChange}
            value={this.props.ethnicity}
          />
          <br />
          <span>Height </span>
          <input
            name="height"
            onChange={this.handleChange}
            value={this.props.height}
            size="2"
          />
          <br />
          <span>Current Offspring </span>
          <input
            name="offspring"
            onChange={this.handleChange}
            value={this.props.offspring}
          />
          <br />
          <span>Want Offspring </span>
          <input
            name="wantOffspring"
            onChange={this.handleChange}
            value={this.props.wantOffspring}
          />
          <br />
          <span>Have Pets </span>
          <input
            name="havePets"
            onChange={this.handleChange}
            value={this.props.havePets}
          />
          <br />
          <span>Want Pets </span>
          <input
            name="wantPets"
            onChange={this.handleChange}
            value={this.props.wantPets}
          />
          <br />
          <span>Education </span>
          <input
            name="education"
            onChange={this.handleChange}
            value={this.props.education}
          />
          <br />
          <span>Job</span>
          <input
            name="job"
            onChange={this.handleChange}
            value={this.props.job}
          />
          <br />
          <span>Religion</span>
          <input
            name="religion"
            onChange={this.handleChange}
            value={this.props.religion}
          />
          <br />
          <span>Diet</span>
          <input
            name="diet"
            onChange={this.handleChange}
            value={this.props.diet}
          />
          <br />
          <span>Drinks</span>
          <input
            name="drinks"
            onChange={this.handleChange}
            value={this.props.drinks}
          />
          <br />
          <span>Drugs</span>
          <input
            name="drugs"
            onChange={this.handleChange}
            value={this.props.drugs}
          />
          <br />
          <span>Smokes</span>
          <input
            name="smokes"
            onChange={this.handleChange}
            value={this.props.smokes}
          />
        </form>

        <Button
          variant="contained"
          color="primary"
          disableElevation
          onClick={this.saveProfile}
          style={{ textAlign: "center" }}
        >
          Save Profile
        </Button>
      </div>
    );
  }
}

export default ProfileDashboard;
