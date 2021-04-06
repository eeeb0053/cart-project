package org.KwonEunbi.api.analysis.domain;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import org.KwonEunbi.api.exhibition.domain.Exhbn;
import org.KwonEunbi.api.recommend.domain.Recommend;
import org.KwonEunbi.api.user.domain.UserVO;

import lombok.Getter;
import org.KwonEunbi.api.user.domain.UserVO;

@Entity @Getter @Table(name = "analyses")
public class Analysis {
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "anal_num") private long analNum;

	@JsonBackReference
	@ManyToOne
	@JoinColumn(name = "user_num")
	private UserVO user;

	@JsonBackReference
	@ManyToOne
	@JoinColumn(name = "exhbn_num")
	private Exhbn exhbn;

	@JsonManagedReference
	@OneToMany(mappedBy = "analysis")
	private List<Recommend> recommendList = new ArrayList<>();
}
/*
create table shows(
   show_num int primary key auto_increment,
   title varchar(30),
   period varchar(30),
   time varchar(20),
   venue varchar(20),
   admission varchar(20),
   price varchar(100),
   host varchar(20),
   management varchar(20),
   inquiry varchar(20)
   );
   poster_image varchar(100)*/