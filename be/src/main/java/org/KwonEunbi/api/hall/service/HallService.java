package org.KwonEunbi.api.hall.service;

import java.util.List;

import org.KwonEunbi.api.hall.domain.Hall;

public interface HallService {
	public List<Hall> findByHallNameAndHallLocation(String name, String location);
	public long update(String hallClosed, long hallNum);
	
}
