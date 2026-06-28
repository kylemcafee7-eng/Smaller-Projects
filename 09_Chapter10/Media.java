//Name: Kyle McAfee
//Date: 12/7/2025
//Description: Program uses abstract and concrete classes to display media details
//Time Spent: 2 hours

package com.csc220.inventory;

//Abstract Media class, media is the core concept, not a type of media, so instances can't be directly created 
public abstract class Media {
/* Protected variables are accessible by subclasses, object in this class, 
 * and classes in this package, which for me is all of my assignments in this class
 */
// Creates a default or template for other classes to build off of 
 protected String majorArtist;
 protected String title;
 protected int playTime;
 protected int numPlays;

 // Constructor that applies the variables in this class to new objects 
 public Media(String majorArtist, String title, int playTime, int numPlays) {
     this.majorArtist = majorArtist;
     this.title = title;
     this.playTime = playTime;
     this.numPlays = numPlays;
 }

 /* Implementation of abstract methods happens in the non-abstract classes, 
 this is basically like a required field for classes that build off of this abstract class.
 */
 public abstract void playMedia();

 // Overriding toString Method to return the strings and not the a memory reference to where the string is stored
 @Override
 public String toString() {
     return "Major Artist: " + majorArtist + "\n" +
            "Title: " + title + "\n" +
            "Play Time: " + playTime + "\n" +
            "Num Plays: " + numPlays;
 }
}