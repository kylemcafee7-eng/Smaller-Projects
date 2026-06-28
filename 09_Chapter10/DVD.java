//Name: Kyle McAfee
//Date: 12/7/2025
//Description: Program uses abstract and concrete classes to display media details
//Time Spent: 2 hours

package com.csc220.inventory;

//Concrete DVD class, DVD is a base level media
public class DVD extends Video {
//Settings that will only apply to dvds in this program, so they're private
 private boolean wideScreen;
 private boolean tvFormat;

 //Contructor with subclass specific variables added 
 public DVD(String majorArtist, String title, int playTime, int numPlays, String director, String format, boolean wideScreen, boolean tvFormat) {
     super(majorArtist, title, playTime, numPlays, director, format);
     this.wideScreen = wideScreen;
     this.tvFormat = tvFormat;
 }

 //Implementation of abstract method from abstract superclass 
 @Override
 public void playMedia() {
     System.out.println("I am playing Media from DVD\n");
 }

 //Adds relevant variables to the default output categories from media 
 @Override
 public String toString() {
     return super.toString() + "\n" +
            "Wide Screen: " + wideScreen + "\n" +
            "TV Format: " + tvFormat;
 }
}