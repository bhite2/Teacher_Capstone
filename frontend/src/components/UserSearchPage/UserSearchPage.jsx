
const UserSearchPage = (props) => {
    return ( 
        <table>
            <thead>
                <tr>
                    <th>User</th>
                    <th>Grade Level</th>
                    <th>District</th>
                    <th>State</th>
                </tr>
            </thead>
            <tbody>
                {props.users
                .filter((user) => user.grade_level.toLowerCase().includes(props.search.toLowerCase()) ||
                user.district.toLowerCase().includes(props.search.toLowerCase()) ||
                user.state.toLowerCase().includes(props.search.toLowerCase()) ||
                song.genre.toLowerCase().includes(props.search.toLowerCase()) ||
                song.release_date.includes(props.search))
                .map((song) => {
                    return (
                        <tr>
                            <td>{user.user_name}</td>
                            <td>{user.grade_level}</td>
                            <td>{user.district}</td>
                            <td>{user.state}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
     );
}
 
export default UserSearchPage;