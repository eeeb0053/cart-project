package org.KwonEunbi.api.exhibition.service;

import org.KwonEunbi.api.common.service.AbstractService;
import org.KwonEunbi.api.exhibition.domain.Exhbn;
import org.KwonEunbi.api.exhibition.repository.ExhbnRepository;

import lombok.RequiredArgsConstructor;

import java.util.List;
import java.util.Optional;

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
	@Override public List<Exhbn> findAll() { return exhbnrepository.findAll();}
	@Override public Exhbn findByExhbnNum(long exhbnNum) { return exhbnrepository.findByExhbnNum(exhbnNum);}
    @Override public long update(String exhbnTitle, String startDate, String endDate, String exhbnGenre, String exhbnPrice, 
    		String exhbnArtist, String exhbnContent, String exhbnImage, String hallLocation, long exhbnNum) { 
		return exhbnrepository.update(exhbnTitle, startDate, endDate, exhbnGenre, exhbnPrice, 
								exhbnArtist, exhbnContent, exhbnImage, hallLocation, exhbnNum);}
   public List<Exhbn> searchTitle(String exhbnTitle){ return exhbnrepository.searchTitle(exhbnTitle);}
}