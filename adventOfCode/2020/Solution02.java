import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;

public class Solution02 {
	public static void main(String[] args) throws IOException {
		System.out.println(partOne());
		System.out.println(partTwo());
	}

	public static List<String> readInputFile() throws IOException {
		return Files.readAllLines(Path.of("input-02.txt"));
	}

	public static int partOne() throws IOException {
		int validPassCounter = 0;
		for (String line : readInputFile()) {
			if (isValidPassword(line))
				validPassCounter++;
		}
		return validPassCounter;
	}

	public static int partTwo() throws IOException {
		int validPassCounter = 0;
		for (String line : readInputFile()) {
			if (isValidPassword2(line))
				validPassCounter++;
		}
		return validPassCounter;
	}

	private static boolean isValidPassword(String passwordEntry) {
		String pass = passwordEntry.split(":")[1].trim();
		String character = passwordEntry.split(":")[0].split(" ")[1];
		int min = Integer.parseInt(passwordEntry.split(" ")[0].split("-")[0]);
		int max = Integer.parseInt(passwordEntry.split(" ")[0].split("-")[1]);
		var charCount = pass.chars().filter(c -> c == character.charAt(0)).count();
		return charCount >= min && charCount <= max;
	}

	private static boolean isValidPassword2(String passwordEntry) {
		String pass = passwordEntry.split(":")[1].trim();
		char character = passwordEntry.split(":")[0].split(" ")[1].charAt(0);
		int min = Integer.parseInt(passwordEntry.split(" ")[0].split("-")[0]);
		int max = Integer.parseInt(passwordEntry.split(" ")[0].split("-")[1]);
		return pass.charAt(min - 1) == character ^ pass.charAt(max - 1) == character;
	}
}