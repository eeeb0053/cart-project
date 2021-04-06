package org.KwonEunbi.api.exhibition.service;

import com.querydsl.core.Tuple;
import org.KwonEunbi.api.common.service.AbstractService;
import org.KwonEunbi.api.exhibition.domain.Exhbn;
import org.KwonEunbi.api.exhibition.domain.ExhbnDTO;
import org.KwonEunbi.api.exhibition.repository.ExhbnRepository;

import lombok.RequiredArgsConstructor;

import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

@Service @RequiredArgsConstructor
public class ExhbnServiceImpl extends AbstractService<Exhbn> implements ExhbnService {
	private final ExhbnRepository exhbnrepository;
	
	@Override public long save(Exhbn e) { return (exhbnrepository.save(e) != null) ? 1 : 0;}
	@Override public long delete(Exhbn e) { exhbnrepository.delete(e); return(getOne(e.getExhbnNum()) == null) ? 1 : 0;}
	@Override public long count() { return exhbnrepository.count();}
	@Override public Exhbn getOne(long id) { return exhbnrepository.getOne(id);}
	@Override public Optional<Exhbn> findById(long id) { return exhbnrepository.findById(id);}
	@Override public boolean existsById(long id) { return exhbnrepository.existsById(id);}
	@Override public List<Exhbn> findAll() {
		return exhbnrepository.findAll().stream().sorted(Comparator.comparing(Exhbn::getStartDate)
				.reversed()).collect(Collectors.toList());}
	@Override public Exhbn findByExhbnNum(long exhbnNum) { return exhbnrepository.findByExhbnNum(exhbnNum);}
    @Override public long update(String exhbnTitle, String startDate, String endDate, String exhbnGenre, String exhbnPrice, 
    		String exhbnArtist, String exhbnContent, String exhbnImage, String hallLocation, long exhbnNum) { 
		return exhbnrepository.update(exhbnTitle, startDate, endDate, exhbnGenre, exhbnPrice, 
								exhbnArtist, exhbnContent, exhbnImage, hallLocation, exhbnNum);}
    public List<Exhbn> searchTitle(String exhbnTitle){ return exhbnrepository.searchTitle(exhbnTitle);}
    public List<Exhbn> sortList(){ return exhbnrepository.sortList();}
	public List<ExhbnDTO> topList(){
		return exhbnrepository.findAll().stream().map(i -> new ExhbnDTO(i)).limit(100).collect(Collectors.toList());
	}
	public List<Exhbn> nowInExhbn(){ return exhbnrepository.nowInExhbn();}
	public List<Exhbn> finExhbn(){ return exhbnrepository.finExhbn();}
	public List<Exhbn> findByHall(long id){ return exhbnrepository.findByHall(id);}
	public List<ExhbnDTO> findByHallNum(long id){
		return exhbnrepository.findByHall(id).stream().map(i -> new ExhbnDTO(i)).collect(Collectors.toList());
	}
}