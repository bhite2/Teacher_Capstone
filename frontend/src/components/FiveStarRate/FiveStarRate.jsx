const FiveStarRate = () => {
    return ( 
        <ul class="btn btn-light list-inline rating-list">
              <li onclick="rate(5, {{ post.id }})">
                  <i class="fa fa-star {% if post.user_rating > 4 %} checked {% endif %}" title="Rate 5"></i></li>
              <li onclick="rate(4, {{ post.id }})">
                  <i class="fa fa-star {% if post.user_rating > 3 %} checked {% endif %}" title="Rate 4"></i></li>
              <li onclick="rate(3, {{ post.id }})">
                  <i class="fa fa-star {% if post.user_rating > 2 %} checked {% endif %}" title="Rate 3"></i></li>
              <li onclick="rate(2, {{ post.id }})">
                  <i class="fa fa-star {% if post.user_rating > 1 %} checked {% endif %}" title="Rate 2"></i></li>
              <li onclick="rate(1, {{ post.id }})">
                  <i class="fa fa-star {% if post.user_rating > 0 %} checked {% endif %}" title="Rate 1"></i></li>
            </ul>
     );
}
 
export default FiveStarRate;