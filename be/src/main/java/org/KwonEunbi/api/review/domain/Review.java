package org.KwonEunbi.api.review.domain;

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

import lombok.Getter;
import org.KwonEunbi.api.user.domain.UserVO;

import java.util.Date;

@Entity @Getter @Table(name = "reviews")
public class Review {
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "review_num") private long reviewNum;
	@Column(name = "review_title") private String reviewTitle;
	@Column(name = "review_content") private String reviewContent;
	@Column(name = "reg_date") private Date regDate;
	@Column private String score;

	@JsonBackReference
	@ManyToOne
	@JoinColumn(name = "user_num")
	private UserVO user;

	@JsonBackReference
	@ManyToOne
	@JoinColumn(name = "exhbn_num")
	private Exhbn exhbn;
}

/*
create table boards(
   board_num int primary key auto_increment,
   title varchar(30),
   content varchar(300),
   date varchar(20),
   id varchar(20)
   );*/