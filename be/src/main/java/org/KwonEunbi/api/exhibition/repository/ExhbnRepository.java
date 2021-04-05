package org.KwonEunbi.api.exhibition.repository;

import org.KwonEunbi.api.exhibition.domain.Exhbn;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

interface ExhbnCustomRepository{
	public List<Exhbn> searchTitle(String exhbnTitle);
}
public interface ExhbnRepository extends JpaRepository<Exhbn, Long>, ExhbnCustomRepository {
	@Query(value="update exhbns e set e.exhbn_title = :exhbnTitle, e.start_date = :startDate, "
			+ "e.end_date =:endDate, e.exhbn_genre =:exhbnGenre, e.exhbn_price =:exhbnPrice, "
			+ "e.exhbn_artist =:exhbnArtist, e.exhbn_content =:exhbnContent, e.exhbn_image =:exhbnImage, "
			+ "e.hall_location =:hallLocation "
			+ " where e.exhbn_num = :exhbnNum;", nativeQuery = true)
	public long update(@Param("exhbnTitle") String exhbnTitle,
						@Param("startDate") String startDate, 
						@Param("endDate") String endDate,
						@Param("exhbnGenre") String exhbnGenre,
						@Param("exhbnPrice") String exhbnPrice,
						@Param("exhbnArtist") String exhbnArtist,
						@Param("exhbnContent") String exhbnContent,
						@Param("exhbnImage") String exhbnImage,
						@Param("hallLocation") String hallLocation,
						@Param("exhbnNum") long exhbnNum);
	
	@Query(value="select * from exhbns e where e.exhbn_num like :exhbnNum", nativeQuery = true)
	public Exhbn findByExhbnNum(@Param("exhbnNum") long exhbnNum);
}
