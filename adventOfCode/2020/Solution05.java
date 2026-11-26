import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.*;

public class Solution05 {
	public static void main(String[] args) throws IOException {
		System.out.println(partOne());
		System.out.println(partTwo());
	}

	public static List<String> readInputFile() throws IOException {
		return Files.readAllLines(Path.of("input-05.txt"));
	}

	public static int getRowNumber(String s) {
		String instructions = s.substring(0, 7);
		int min = 0;
		int max = 127;

		for (String inst : instructions.split("")) {
			int mid = (int) Math.floor((min + max) / 2);
			if (inst.equals("F")) {
				max = mid;
			} else {
				min = mid + 1;
			}
		}
		return min;
	}

	public static int getColmnNumber(String s) {
		String instructions = s.substring(7);
		int min = 0;
		int max = 7;

		for (String inst : instructions.split("")) {
			int mid = (int) Math.floor((min + max) / 2);
			if (inst.equals("L")) {
				max = mid;
			} else {
				min = mid + 1;
			}
		}
		return min;
	}

	public static int calculateSeatId(int rowNumber, int colNumber) {
		return rowNumber * 8 + colNumber;
	}

	public static int partOne() throws IOException {
		int result = 0;
		for (String bp : readInputFile()) {
			int seatId = calculateSeatId(getRowNumber(bp), getColmnNumber(bp));
			result = Math.max(seatId, result);
		}
		return result;
	}

	public static int findMissingNumber(List<Integer> seatIDs) {
		for (int i = 0; i < seatIDs.size(); i++) {
			if (i == 0 || i == seatIDs.size() - 1)
				continue;
			int previous = seatIDs.get(i - 1);
			int current = seatIDs.get(i);
			if (previous + 1 != current)
				return previous + 1;
		}
		return 0;
	}

	public static int partTwo() throws IOException {
		List<Integer> seatIDs = new ArrayList<>();
		for (String bp : readInputFile()) {
			int seatId = calculateSeatId(getRowNumber(bp), getColmnNumber(bp));
			seatIDs.add(seatId);
		}
		seatIDs.sort((a, b) -> a - b);
		return findMissingNumber(seatIDs);
	}
}