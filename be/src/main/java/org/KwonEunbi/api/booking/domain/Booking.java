package org.KwonEunbi.api.booking.domain;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import org.KwonEunbi.api.exhibition.domain.Exhbn;
import org.KwonEunbi.api.user.domain.UserVO;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Data;
import lombok.EqualsAndHashCode;
import org.KwonEunbi.api.user.domain.UserVO;

import java.util.Date;

@Entity @Data @Table(name = "bookings") @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Booking {
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY) 
	@Column(name = "book_num") private long bookNum;
	@Column(name = "book_date") private Date bookDate;
	@Column(name = "total_price") private String totalPrice;
	@Column(name = "book_name") private String bookName;
	@Column(name = "book_email") private String bookEmail;
	@Column(name = "book_pnumber") private String bookPnumber;

	@JsonBackReference
	@ManyToOne
	@JoinColumn(name = "user_num")
	private UserVO user;

	@JsonBackReference
	@ManyToOne
	@JoinColumn(name = "exhbn_num")
	private Exhbn exhbn;
}
