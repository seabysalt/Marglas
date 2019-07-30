// import React, { Component } from "react";
// import axios from "axios";

// export class Friends extends Component {
//   state = {
//     searchFriends: []
//   };

//   handleChange = event => {
//     this.setState({
//       searchFriends: event.target.value
//     });

//   // searching for friends
//   // componentDidMount() {
//   //   axios
//   //   //get the matching id from input field and push to new array
//   //   //this.props.user_id.match
//   //     .get("/following", {
//   //       type: Schema.Types.ObjectId
//   //     })
//   //     .then(res => {
//   //       // const friendsList = [...this.state.searchFriends]
//   //       this.setState();
//   //     })
//   //     .catch(err => {
//   //       console.log(err);
//   //     });
//   // }

//   render() {
//     return (
//       <div class="menuFollow">
//         <h1>my friends</h1>
//         <form class="addPeer">
//           <label for="peers">username: </label>
//           <input
//             class="input"
//             type="text"
//             name="searchFriends"
//             id="peers"
//             value={this.state.searchFriends}
//             onChange={this.handleChange}
//           />
//           <button class="submitPeerButton" type="submit">
//             add friend
//           </button>
//         </form>

//         <table class="peersTable">
//           <tbody>
//             <tr>
//               <th></th>
//               <th>Name</th>
//               <th>Fill Marglas</th>
//               <th>Unfollow</th>
//             </tr>
//             <tr>
//               <td>{this.state.img}</td>
//               <td>{this.state.username}</td>
//               <td>
//                 <button class="submitPeerButton">fill marglas up</button>
//               </td>
//               <td>
//                 <button class="submitPeerButton">unfollow</button>
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     );
//   }
// }

// export default Friends;
