import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.*;

public class Solution03 {
	public static void main(String[] args) throws IOException {
		System.out.println(partOne());
		System.out.println(partTwo());
	}

	public static List<String> readInputFile() throws IOException {
		return Files.readAllLines(Path.of("input-03.txt"));
	}

	private static int getActualColumnIndex(int currentColumn, int length) {
		return currentColumn % length;
	}

	public static int partOne() throws IOException {
		List<String> map = readInputFile();
		int treesCounter = 0;
		int row_x = 0;
		int col_y = 0;
		while (row_x < map.size()) {
			int actual_col_y = getActualColumnIndex(col_y, map.get(0).length());
			char currentSpot = map.get(row_x).charAt(actual_col_y);
			if (currentSpot == '#')
				treesCounter++;
			row_x += 1;
			col_y += 3;
		}
		return treesCounter;
	}

	public static int partTwo() throws IOException {
		List<String> map = readInputFile();
		int[][] slopes = {
				{ 1, 1 },
				{ 3, 1 },
				{ 5, 1 },
				{ 7, 1 },
				{ 1, 2 }
		};
		int result = 1;
		for (int[] slope : slopes) {
			int treesCounter = 0;
			int row_x = 0;
			int col_y = 0;
			while (row_x < map.size()) {
				int actual_col_y = getActualColumnIndex(col_y, map.get(0).length());
				char currentSpot = map.get(row_x).charAt(actual_col_y);
				if (currentSpot == '#')
					treesCounter++;
				row_x += slope[1];
				col_y += slope[0];
			}
			result *= treesCounter;
		}
		return result;
	}
}