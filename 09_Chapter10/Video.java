//Name: Kyle McAfee
//Date: 12/7/2025
//Description: Program uses abstract and concrete classes to display media details
//Time Spent: 2 hours

package com.csc220.inventory;

//Abstract Video class, video is a type of media, but still a concept and not a format, so it's abstract here
public abstract class Video extends Media {

	
//Variables specific to video media
 protected String director;
 protected String format;

 
 public Video(String majorArtist, String title, int playTime, int numPlays, String director, String format) {
     /*Calls variables from parent class that are relevant to all media formats, 
      * then adds variables specific to video objects 
      */
	 super(majorArtist, title, playTime, numPlays);
     this.director = director;
     this.format = format;
 }

 // Concatenates readable strings instead of memory references 
 @Override
 public String toString() {
     return super.toString() + "\n" +
            "Director: " + director + "\n" +
            "Format: " + format;
 }
}