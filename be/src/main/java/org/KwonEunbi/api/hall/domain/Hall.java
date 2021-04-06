package org.KwonEunbi.api.hall.domain;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import org.KwonEunbi.api.exhibition.domain.Exhbn;

import lombok.Getter;

@Entity @Getter
@Table(name = "halls")
public class Hall {
	
	@Id 
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "hall_num") private long hallNum;
    @Column(name = "hall_name") private String hallName;
    @Column(name = "hall_location") private String hallLocation;
    @Column(name = "hall_time") private String hallTime;
    @Column(name = "hall_closed") private String hallClosed;
    @Column(name = "hall_pnumber") private String hallPnumber;
    @Column(name = "hall_info") private String hallInfo;
    @Column(name = "hall_image") private String hallImage;

    @JsonManagedReference
    @OneToMany(mappedBy = "hall")
    private List<Exhbn> exhbnList = new ArrayList<>();
}
/*
create table halls(
   hall_num int primary key auto_increment,
   hall_name varchar(50),
   hall_location varchar(100),
   hall_time varchar(20),
   hall_closed varchar(20),
   hall_pnumber varchar(20),
   hall_info varchar(200),
   hall_image varchar(100)
   );
*/