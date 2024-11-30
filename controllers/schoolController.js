const { pool } = require('../config/database');
const { validateSchool } = require('../utils/validation');
const { calculateDistance } = require('../utils/geoDistance');

async function addSchool(req, res) {
  try {
    const { error } = validateSchool(req.body);
    if (error) {
      return res.status(400).json({ 
        message: 'Invalid input', 
        details: error.details[0].message 
      });
    }

    const { name, address, latitude, longitude } = req.body;
    
    const [result] = await pool.query(
      'INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)',
      [name, address, latitude, longitude]
    );

    res.status(201).json({
      message: 'School added successfully',
      schoolId: result.insertId
    });
  } catch (error) {
    console.error('Error adding school:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

async function listSchools(req, res) {
  try {
    const { latitude, longitude } = req.query;

    // Validate input coordinates
    if (!latitude || !longitude) {
      return res.status(400).json({ 
        message: 'Latitude and longitude are required' 
      });
    }

    const [schools] = await pool.query('SELECT * FROM schools');

    // Calculate distances and sort
    const schoolsWithDistance = schools.map(school => ({
      ...school,
      distance: calculateDistance(
        parseFloat(latitude), 
        parseFloat(longitude), 
        school.latitude, 
        school.longitude
      )
    }));

    // Sort by proximity
    const sortedSchools = schoolsWithDistance.sort((a, b) => a.distance - b.distance);

    res.json(sortedSchools);
  } catch (error) {
    console.error('Error listing schools:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

module.exports = {
  addSchool,
  listSchools
};