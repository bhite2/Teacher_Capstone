const FiveStarView = () => {
    return ( 
        <h5 class="card-title">Avg rating:
        <span class="fa fa-star {% if post.average_rating > 0 %} checked {% endif %}"></span>
        <span class="fa fa-star {% if post.average_rating > 1 %} checked {% endif %}"></span>
        <span class="fa fa-star {% if post.average_rating > 2 %} checked {% endif %}"></span>
        <span class="fa fa-star {% if post.average_rating > 3 %} checked {% endif %}" ></span>
        <span class="fa fa-star {% if post.average_rating > 4 %} checked {% endif %}"></span>
    </h5>
     );
}
 
export default FiveStarView;