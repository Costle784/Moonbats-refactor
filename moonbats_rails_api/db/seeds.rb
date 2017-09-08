require 'csv'

# Moonphase.destroy_all
Team.destroy_all
# Game.destroy_all



nationals = Team.create!({
  name:'Washington Nationals',
  symbol:'WSN',
  logo:"http://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/was.png",
  league:'N'
})

phillies = Team.create!({
  name:"Philadelphia Phillies",
  symbol:"PHI",
  logo:'http://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/phi.png',
  league:'N'
})

braves = Team.create!({
  name:"Atlanta Braves",
  symbol:'ATL',
  logo:'http://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/atl.png',
  league:'N'
})

mets = Team.create!({
  name:'New York Mets',
  symbol:'NYM',
  logo:'http://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/nym.png',
  league:'N'
})

marlins = Team.create!({
  name:'Miami Marlins',
  symbol:'MIA',
  logo: 'http://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/mia.png',
  league:'N'
})

cubs = Team.create!({
  name:'Chicago Cubs',
  symbol:'CHC',
  logo: 'http://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/chc.png',
  league:'N'
})

cardinals = Team.create!({
  name:'St Louis Cardinals',
  symbol:'STL',
  logo: 'http://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/stl.png',
  league:'N'
})

brewers = Team.create!({
  name:'Milwaukee Brewers',
  symbol:'MIL',
  logo: 'http://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/mil.png',
  league:'N'
})

pirates = Team.create!({
  name:'Pittsburgh Pirates',
  symbol:'PIT',
  logo: 'http://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/pit.png',
  league:'N'
})

reds = Team.create!({
  name:'Cincinnati Reds',
  symbol:'CIN',
  logo: 'http://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/cin.png',
  league:'N'
})

dodgers = Team.create!({
  name:'Los Angeles Dodgers',
  symbol:'LAD',
  logo: 'http://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/lad.png',
  league:'N'
})

diamonbacks = Team.create!({
  name:'Arizona Diamondbacks',
  symbol:'ARI',
  logo:'http://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/ari.png',
  league:'N'
})

rockies = Team.create!({
  name:'Colorado Rockies',
  symbol:'COL',
  logo: 'http://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/col.png',
  league:'N'
})

padres = Team.create!({
  name:'San Diego Padres',
  symbol:'SDP',
  logo: 'http://a1.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fmlb%2F500%2Fsd.png',
  league:'N'
})

giants = Team.create!({
  name:'San Francisco Giants',
  symbol:'SFG',
  logo: 'http://a.espncdn.com/i/teamlogos/mlb/500-dark/scoreboard/sf.png',
  league:'N'
})

redsox = Team.create!({
  name:'Boston Red Sox',
  symbol:'BOS',
  logo: 'http://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/bos.png',
  league:'A'
})

yankees = Team.create!({
  name:'New York Yankees',
  symbol:'NYY',
  logo: 'http://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/nyy.png',
  league:'A'
})

orioles = Team.create!({
  name:'Baltimore Orioles',
  symbol:'BAL',
  logo: 'http://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/bal.png',
  league:'A'
})

rays = Team.create!({
  name:'Tampa Bay Rays',
  symbol:'TBR',
  logo: 'http://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/tam.png',
  league:'A'
})

jays = Team.create!({
  name:'Toronto Blue Jays',
  symbol:'TOR',
  logo: 'http://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/tor.png',
  league:'A'
})

indians = Team.create!({
  name:'Cleveland Indians',
  symbol:'CLE',
  logo: 'http://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/cle.png',
  league:'A'
})

twins = Team.create!({
  name:'Minnesota Twins',
  symbol:'MIN',
  logo: 'http://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/min.png',
  league:'A'
})

royals = Team.create!({
  name:'Kansas City Royals',
  symbol:'KCR',
  logo: 'http://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/kan.png',
  league:'A'
})

tigers = Team.create!({
  name:'Detroit Tigers',
  symbol:'DET',
  logo: 'http://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/det.png',
  league:'A'
})

whitesox = Team.create!({
  name:'Chicago White Sox',
  symbol:'CHW',
  logo: 'http://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/chw.png',
  league:'A'
})

astros = Team.create!({
  name:'Houston Astros',
  symbol:'HOU',
  logo: 'http://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/hou.png',
  league:'A'
})

angels = Team.create!({
  name:'Los Angeles Angels',
  symbol:'LAA',
  logo: 'http://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/laa.png',
  league:'A'
})

rangers = Team.create!({
  name:'Texas Rangers',
  symbol:'TEX',
  logo: 'http://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/tex.png',
  league:'A'
})

mariners = Team.create!({
  name:'Seatle Mariners',
  symbol:'SEA',
  logo: 'http://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/sea.png',
  league:'A'
})

athletics = Team.create!({
  name:'Oakland Athletics',
  symbol:'OAK',
  logo: 'http://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/oak.png',
  league:'A'
})




# csv_text = File.read(Rails.root.join('lib', 'seeds', 'games2017.csv'))
# csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
# csv.each do |row|
#   t = Game.new
#   t.date = DateTime.strptime(row['date'], '%A %b %d')
#   t.team = Team.find_by(symbol: row['team'])
#   t.opp = row['opp']
#   t.wl = row['wl']
#   t.save
# end
#
# csv_text = File.read(Rails.root.join('lib', 'seeds', 'games2016.csv'))
# csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
# csv.each do |row|
#   t = Game.new
#   t.date = DateTime.strptime(row['date'], '%A %b %d').change(year:2016)
#   t.team = Team.find_by(symbol: row['team'])
#   t.opp = row['opp']
#   t.wl = row['wl']
#   t.save
# end
#
# csv_text = File.read(Rails.root.join('lib', 'seeds', 'games2015.csv'))
# csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
# csv.each do |row|
#   t = Game.new
#   t.date = DateTime.strptime(row['date'], '%A %b %d').change(year:2015)
#   t.team = Team.find_by(symbol: row['team'])
#   t.opp = row['opp']
#   t.wl = row['wl']
#   t.save
# end
#
# csv_text = File.read(Rails.root.join('lib', 'seeds', 'games2014.csv'))
# csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
# csv.each do |row|
#   t = Game.new
#   t.date = DateTime.strptime(row['date'], '%A %b %d').change(year:2014)
#   t.team = Team.find_by(symbol: row['team'])
#   t.opp = row['opp']
#   t.wl = row['wl']
#   t.save
# end
#
# csv_text = File.read(Rails.root.join('lib', 'seeds', 'games2013.csv'))
# csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
# csv.each do |row|
#   t = Game.new
#   t.date = DateTime.strptime(row['date'], '%A %b %d').change(year:2013)
#   t.team = Team.find_by(symbol: row['team'])
#   t.opp = row['opp']
#   t.wl = row['wl']
#   t.save
# end
#
# csv_text = File.read(Rails.root.join('lib', 'seeds', 'games2012.csv'))
# csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
# csv.each do |row|
#   t = Game.new
#   t.date = DateTime.strptime(row['date'], '%A %b %d').change(year:2012)
#   t.team = Team.find_by(symbol: row['team'])
#   t.opp = row['opp']
#   t.wl = row['wl']
#   t.save
# end
#
# csv_text = File.read(Rails.root.join('lib', 'seeds', 'moonphases.csv'))
# csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
# csv.each do |row|
#   t = Moonphase.new
#   t.date = DateTime.strptime(row['date'], '%m/%d/%Y')
#   t.phase = row['phase']
#   t.save
# end
