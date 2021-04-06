package org.KwonEunbi.api.hall.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import org.KwonEunbi.api.common.service.AbstractService;
import org.KwonEunbi.api.hall.domain.Hall;
import org.KwonEunbi.api.hall.repository.HallRepository;

import lombok.RequiredArgsConstructor;

@Service @RequiredArgsConstructor
public class HallServiceImpl extends AbstractService<Hall> implements HallService {
	final HallRepository hallRepository;
	
	@Override 
	public long save(Hall hall) {
		return (hallRepository.save(hall) != null) ? 1 : 0;
	}
	@Override 
	public long delete(Hall hall) {
		hallRepository.delete(hall); 
		return(getOne(hall.getHallNum()) == null) ? 1 : 0;
	}
	@Override 
	public long count() {
		return hallRepository.count();
	}
	@Override 
    public Hall getOne(long id) {
    	return hallRepository.getOne(id);
    }
	@Override 
    public Optional<Hall> findById(long id) {
    	return hallRepository.findById(id);
	}
    @Override 
    public boolean existsById(long id) {
    	return hallRepository.existsById(id);
    }
    @Override 
    public List<Hall> findAll() {
    	return hallRepository.findAll();
    }
    @Override
    public List<Hall> findByHallNameAndHallLocation(String name, String location) {
    	return hallRepository.findByHallNameAndHallLocation(name, location);
    }
	@Override 
	public long update(String hallClosed, long hallNum) { 
		return hallRepository.update(hallClosed, hallNum);
	}
}
