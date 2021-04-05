package org.KwonEunbi.api.user.domain;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.*;

import org.KwonEunbi.api.analysis.domain.Analysis;
import org.KwonEunbi.api.booking.domain.Booking;
import org.KwonEunbi.api.review.domain.Review;

import lombok.Data;
import lombok.Getter;


@Entity @Data @Table(name = "users")
public class UserVO {
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "user_num") private long userNum;
	@Column private String username;
	@Column private String password;
	@Column private String name;
	@Column private String email;
	@Column private String gender;
	@Column private String birthday;
	@Column(name = "phone_number") private String phoneNumber;
	@Column(name = "prefer_genre") private String preferGenre;
	
	@OneToMany(mappedBy = "user")
	private List<Analysis> analysisList = new ArrayList<>();
	
	@OneToMany(mappedBy = "user")
	private List<Booking> bookingList = new ArrayList<>();
	
	@OneToMany(mappedBy = "user")
	private List<Review> reviewList = new ArrayList<>();

	@ElementCollection(fetch = FetchType.EAGER)
	List<Role> roles;

}
