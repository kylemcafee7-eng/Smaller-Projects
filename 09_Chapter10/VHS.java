//Name: Kyle McAfee
//Date: 12/7/2025
//Description: Program uses abstract and concrete classes to display media details
//Time Spent: 2 hours

package com.csc220.inventory;

/*Concrete VHS class, VHS is a format of Video which is a type of media, 
 * a VHS is a level of media that people would actually interact with, so it's concrete here
 */
public class VHS extends Video {

/* No other form of media is going to need to have a trailer, 
 * so this is private since it only applies to this class
 * DVD could probably also have trailers IRL, but I wanted to implement some private variables
 */
 private String trailer;

 public VHS(String majorArtist, String title, int playTime, int numPlays,
            String director, String format, String trailer) {
     super(majorArtist, title, playTime, numPlays, director, format);
     this.trailer = trailer;
 }

 //Implementation of the aforementioned abstract method 
 @Override
 public void playMedia() {
     System.out.println("I am playing Media from VHS\n");
 }

 //Adds trailer to the toString method output in media
 @Override
 public String toString() {
     return super.toString() + "\n" +
            "Trailer: " + trailer;
 }
}