package com.app.controllers;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.models.Album;
import com.app.models.Artist;
import com.app.models.DateRange;
import com.app.models.Song;
import com.app.models.UserSong;
import com.app.repo.UserSongRepository;
import com.app.services.AnalysisService;
import com.app.services.RecommendationService;


@RestController
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
@RequestMapping("/recommendation")
public class RecommendationController {
	@Autowired
	private RecommendationService recommendationService;
	
	@GetMapping("/popular")
	public ResponseEntity<List<Song>> popularRecommendationController(){
		return ResponseEntity.ok(recommendationService.popularityRec());
	}
	

}
