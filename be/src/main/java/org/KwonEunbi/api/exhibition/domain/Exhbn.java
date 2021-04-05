package org.KwonEunbi.api.exhibition.domain;

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

import org.KwonEunbi.api.analysis.domain.Analysis;
import org.KwonEunbi.api.booking.domain.Booking;
import org.KwonEunbi.api.hall.domain.Hall;
import org.KwonEunbi.api.review.domain.Review;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Table(name = "exhbns")
@Setter
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Exhbn {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "exhbn_num")
    private long exhbnNum;
    @Column(name = "exhbn_title")
    private String exhbnTitle;
    @Column(name = "start_date")
    private String startDate;
    @Column(name = "end_date")
    private String endDate;
    @Column(name = "exhbn_genre")
    private String exhbnGenre;
    @Column(name = "exhbn_price")
    private String exhbnPrice;
    @Column(name = "exhbn_artist")
    private String exhbnArtist;
    @Column(name = "exhbn_content")
    private String exhbnContent;
    @Column(name = "exhbn_image")
    private String exhbnImage;
    @Column(name = "hall_location")
    private String hallLocation;

    @ManyToOne
    @JoinColumn(name = "hall_num")
    private Hall hall;

    @OneToMany(mappedBy = "exhbn")
    private List<Analysis> analysisList = new ArrayList<>();

    @OneToMany(mappedBy = "exhbn")
    private List<Booking> bookingList = new ArrayList<>();

    @OneToMany(mappedBy = "exhbn")
    private List<Review> reviewList = new ArrayList<>();
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