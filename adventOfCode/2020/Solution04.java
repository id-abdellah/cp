import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.*;

public class Solution04 {
	public static void main(String[] args) throws IOException {
		System.out.println(partOne());
		System.out.println(partTwo());
	}

	public static String readInputFile() throws IOException {
		return Files.readString(Path.of("input-04.txt"));
	}

	public static List<Map<String, String>> getPassports() throws IOException {
		String input = readInputFile();
		List<Map<String, String>> passports = Arrays
				.asList(input.split("\\R{2,}"))
				.stream()
				.map(s -> s.replaceAll("\n", " "))
				.map(s -> {
					Map<String, String> pass = new HashMap<>();
					List.of(s.split(" ")).forEach(info -> pass.put(info.split(":")[0], info.split(":")[1]));
					return pass;
				})
				.toList();

		return passports;
	}

	public static int partOne() throws IOException {
		List<Map<String, String>> passports = getPassports();
		List<String> requiredFields = List.of("byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid", "cid");
		List<String> optionalFields = List.of("cid");
		int validPassportsCounter = 0;
		for (Map<String, String> pass : passports) {
			List<String> missingFields = new ArrayList<>(List.of());
			requiredFields.forEach(f -> {
				if (!pass.containsKey(f))
					missingFields.add(f);
			});
			validPassportsCounter += missingFields.size() > 1
					? 0
					: ((missingFields.size() == 1 && missingFields.containsAll(optionalFields))
							|| missingFields.size() == 0)
									? 1
									: 0;
		}
		return validPassportsCounter;
	}

	public static boolean part2IsValidPassport(Map<String, String> pass) {
		List<String> requiredFields = List.of("byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid", "cid");

		List<String> missingFields = requiredFields.stream().filter(f -> !pass.containsKey(f)).toList();

		if (missingFields.size() > 1)
			return false;
		if (missingFields.size() == 1 && !missingFields.contains("cid"))
			return false;

		// byr
		int byr = Integer.parseInt(pass.get("byr"));
		if (byr < 1920 || byr > 2002)
			return false;

		// iyr
		int iyr = Integer.parseInt(pass.get("iyr"));
		if (iyr < 2010 || iyr > 2020)
			return false;

		// eyr
		int eyr = Integer.parseInt(pass.get("eyr"));
		if (eyr < 2020 || eyr > 2030)
			return false;

		// hgt
		String hgt = pass.get("hgt");
		int hgt_int = Integer.parseInt(hgt.substring(0, hgt.length() - 2));
		if (hgt.contains("cm")) {
			if (hgt_int < 150 || hgt_int > 193)
				return false;
		} else {
			if (hgt_int < 59 || hgt_int > 76)
				return false;
		}

		// hcl
		String hcl = pass.get("hcl");
		if (!hcl.matches("^#[0-9a-f]{6}$"))
			return false;

		// ecl
		String ecl = pass.get("ecl");
		if (!List.of("amb", "blu", "brn", "gry", "grn", "hzl", "oth").contains(ecl))
			return false;

		// pid
		String pid = pass.get("pid");
		if (pid.length() != 9)
			return false;

		return true;
	}

	public static int partTwo() throws IOException {
		int counter = 0;
		for (Map<String, String> pass : getPassports()) {
			if (part2IsValidPassport(pass))
				counter++;
		}
		return counter;
	}
}