
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
                {props.songs
                .filter((song) => song.title.toLowerCase().includes(props.search.toLowerCase()) ||
                song.artist.toLowerCase().includes(props.search.toLowerCase()) ||
                song.album.toLowerCase().includes(props.search.toLowerCase()) ||
                song.genre.toLowerCase().includes(props.search.toLowerCase()) ||
                song.release_date.includes(props.search))
                .map((song) => {
                    return (
                        <tr>
                            <td>{song.user_name}</td>
                            <td>{song.grade_level}</td>
                            <td>{song.district}</td>
                            <td>{song.state}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
     );
}
 
export default UserSearchPage;