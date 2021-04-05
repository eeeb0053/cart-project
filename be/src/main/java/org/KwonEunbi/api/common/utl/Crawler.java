package org.KwonEunbi.api.common.utl;

import org.springframework.stereotype.Component;

import org.KwonEunbi.api.review.domain.ReviewDTO;

import lombok.RequiredArgsConstructor;

import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.Jsoup;
import org.jsoup.select.Elements;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Component @RequiredArgsConstructor
public class Crawler extends Proxy{
	private final Logger logger = LoggerFactory.getLogger(this.getClass());
    // final Vector<ReviewDTO> revBag;
    public Vector<ReviewDTO>  crawling(String url2){
    	String url = "https://tickets.interpark.com/goods/20009147";
        logger.info("크롤링 대상 URL : "+url);
        try{
            Document rawData = Jsoup.connect(url).timeout(10 * 1000).get();
            Elements titles = rawData.select("div[class=bbsTitleText]");
            Elements contents = rawData.select("p[class=bbsText]");
            Elements scores = rawData.select("div[class=prdStarIcon]");
            ReviewDTO review = null;
            logger.info(" titles.size() " + titles.size());
            logger.info(" contents.size() " + contents.size());
            for(int i=0; i< titles.size(); i++){
            	review = new ReviewDTO();
            	review.setReviewTitle(titles.get(i).text());
            	review.setReviewContent(contents.get(i).text());
            	review.setScore(scores.get(i).text());
            	logger.info("크롤링된 게시글 "+ i+"번 : " +review.toString());
            	// revBag.add(review);
            }
        }catch(Exception e){
            e.printStackTrace();
        }
        return null;
    }

}
