const FiveStarRate = () => {


    return ( 
        <div>
            <form action="/action_page.php">
                <label for="ratings">Rate:</label>
                    <select id="ratings" name="ratings">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                <input type="submit"/>
            </form>

        </div>
     );
}
 
export default FiveStarRate;