package org.KwonEunbi.api.common.utl;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;
import org.openqa.selenium.Proxy;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.KwonEunbi.api.review.domain.ReviewDTO;

import org.openqa.selenium.*;
import org.openqa.selenium.chrome.*;

public class CrawlerBySele extends Proxy {
	private final Logger logger = LoggerFactory.getLogger(this.getClass());
	
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
	/*
    public static void main(String[] args) throws InterruptedException{
        // Optional. If not specified, WebDriver searches the PATH for chromedriver.
        System.setProperty("webdriver.chrome.driver", "C:\\Users\\EUNBI\\EunbiCode\\SpringBoot\\workspace-project\\be\\demo\\src\\main\\resources\\static\\chromedriver.exe");
        
        WebDriver driver = new ChromeDriver();
        driver.get("https://movie.naver.com/movie/point/af/list.nhn");
        System.out.println(driver.getPageSource());
	} */
}
  